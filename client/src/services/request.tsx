import axios, {Method} from "axios";

export const request = async (
    method: Method,
    url: string,
    success: Function,
    rejected: Function | null = null,
    catchCallback: Function | null = null,
    values: any = null,
    config: object | null = null,
): Promise<any> => {
    try {
        const response = await axios.request({
            url: url,
            method: method,
            data: values,
            ...config
        })
        if (response.status === 200) {
            return success(response)
        } else {
            return rejected ? rejected(response) : console.log("notifications.warning()")
        }
    } catch (error) {
        return catchCallback ? catchCallback() : console.log(error)
    }
}