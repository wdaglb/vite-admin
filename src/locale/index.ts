const data = import.meta.glob('./**/*.yaml')

let messages: any = undefined

export const getCurrentLocale = () => {
  
}

// 语言文件加载
export const loadLocaleFile = async (locale: string) =>{
  if (messages !== undefined) {
    return messages[locale]
  }
  messages = {}
  for (let key in data) {
    const res = await data[key]()
    const temp = key.replace(/\.yaml/, '').replace('./', '').split('/')
    if (!messages[temp[0]]) {
      messages[temp[0]] = {}
    }
    messages[temp[0]][temp[1]] = (res as any).default
  }
  return messages[locale]
}
