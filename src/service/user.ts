export async function login(name: string, password: string): Promise<{ name: string, password: string }> {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return new Promise((resolve, reject) => {
        console.log("调用网络请求")

        if (name === "胡志武" && password === "123456") {
            resolve({
                name,
                password
            })
        } else {
            reject("账户或密码错误")
        }
    })
}

export function storeItem(name: string, password: string) {
    try {
        localStorage.setItem("user", JSON.stringify({ name, password }))
    } catch (error) {
        console.log(error)
    }
}

export function clearItem() {
    try {
        localStorage.removeItem("user")
    } catch (error) {
        console.log(error)
    }
}