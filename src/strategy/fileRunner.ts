import { writeFileStr } from "https://deno.land/std/fs/write_file_str.ts";
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";
import { exists } from 'https://deno.land/std/fs/exists.ts';
import { ensureFile } from 'https://deno.land/std/fs/ensure_file.ts';

import { Runner } from '../types/Runner.ts';
import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';
import { getDateString } from '../helpers/date.ts';
import { formatLogMsg } from '../helpers/logFormat.ts';
import { WriteFileTask } from '../types/WriteFileTask.ts';

let writeInProgress = false;
let tasks: WriteFileTask[] = [];

async function runFileWriteTask(task: WriteFileTask) {
    writeInProgress = true;
    if (await exists(task.fileName)) {
        const file = await readFileStr(task.fileName, { encoding: "utf8" });
        await writeFileStr(task.fileName, `${file}${task.task} \n`);
    } else {
        await ensureFile(task.fileName);
        await writeFileStr(task.fileName, `${task.task}\n`);
    }
    writeInProgress = false;

    const [firstTask, ...allTasks] = tasks;
    tasks = [...allTasks];
    firstTask && await runFileWriteTask(firstTask);
}

export const fileRunner: Runner = async (level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) => {

    const { dateFormat, logFormat } = config;
    const date = getDateString(dateFormat);
    const logInfo = formatLogMsg(date, level, name, logFormat);

    const folder = config.logFolder || './Logs';

    const task: WriteFileTask = {
        fileName: `${folder}/${config.fileName || name+'.log'}`,
        task: `${logInfo} ${args.toString()}`
    }

    if (writeInProgress) {
        tasks.push(task);
    } else {
        runFileWriteTask(task);
    }
}