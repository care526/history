// 自动创建react所需的组件模板
// 控制所依赖的文件顺序一致

// care -c comp xxx

const Fs = require('fs')
const Path = require('path')

const argv = process.argv.slice(2, 5)

const Utils = {
    ProcessDone: () => process.exit()  // 结束进程
}

class Care {
    private ParameterTypes = {
        '-c': 'create'
    }
    private createTypes = {
        'comp': 'createComp'
    }

    private commitType: string = ''
    private childCommitType: string = ''
    private compName: string = ''

    constructor(
        commitType?: string,
        childCommitType?: string,
        compName?: string
    ) {
        this.commitType = commitType || ''
        this.childCommitType = childCommitType || ''
        this.compName = compName || ''
    }

    public init(errCb: Function) {
        if (this.checkParameter(errCb)) {
            this[this.ParameterTypes[this.commitType]](errCb)
        }
    }

    private checkParameter(errCb: Function) {
        if (Object.keys(this.ParameterTypes).includes(this.commitType)) return true
    
        console.error(`当前模式'${this.commitType}'不存在，详情请查阅文档!`)
        return false
    }

    
    private create(errCb: Function) {
        if (!Object.keys(this.createTypes).includes(this.childCommitType)) {
            console.error(`当前模式'${this.childCommitType}'不存在，详情请查阅文档!`)
            errCb()
        }
        this[this.createTypes[this.childCommitType]](errCb)
    }

    // 创建组件目录
    private async createComp(errCb: Function) {
        if (!this.compName) {
            console.error('待创建组件名称不存在，详情请查阅文档!')
            errCb()
        }
        function checkDirExist(path: string): Promise<boolean> {
            return new Promise((res, rej) => {
                Fs.access(path, (err: any | null) => {
                    if (!err) return res(true)
                    return res(false)
                })
            })
        }
        const willCreateCompPath: string = Path.join(__dirname, `/src/views/${this.compName}`)
        const isDirExist: boolean = await checkDirExist(willCreateCompPath)
        
        if (isDirExist) {
            console.error('该组件已存在，请检查后，重新创建!')
            errCb()
        }

        Fs.mkdirSync(willCreateCompPath)

        const tsxData = (compName) => `import React, { useState } from 'react'\n
// components

// utils

// apis

// assets
import './${compName}.sass'

export default function ${compName}() {

    return <div>
        work!
    </div>
}`
        const apiData = `import { post } from "@/api"\n
export function test() {
    return post('/text')
}
`

        Fs.writeFile(`${willCreateCompPath}/${this.compName}.tsx`, tsxData(this.compName), (err: any) => {
            if (err) throw err;
        });
        
        Fs.writeFile(`${willCreateCompPath}/apis.ts`, apiData, (err: any) => {
            if (err) throw err;
        });
        Fs.writeFile(`${willCreateCompPath}/${this.compName}.sass`, '', (err: any) => {
            if (err) throw err;
        });

    }
}


// 运行
const care = new Care(
    ...argv
)

care.init(Utils.ProcessDone)