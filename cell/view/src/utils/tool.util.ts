class ToolUtil {
  getLocalStorageObj(key: string) {
    const objStr = localStorage.getItem(key);
    try {
      return JSON.parse(objStr || '{}');
    } catch {
      return {};
    }
  }
}

export const toolUtil = new ToolUtil();
