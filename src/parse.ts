import Result from "./model/result";

const parseMsg: (inStr: string) => Result[] = (inStr: string) => {
    let str = inStr;
    let results: Result[] = [];
    while (str.indexOf("[") !== -1) {
        let code = str.substring(str.indexOf("["), str.indexOf("]") + 1);
        str = str.slice(str.indexOf("]") + 1);

        code = code.slice(1);
        code = code.slice(0, code.length - 1);

        const codes = code.split(",");
        const type = codes[0].split(":").slice(1).join("");
        let result: Result = {
            type,
            data: {},
        };

        switch (type) {
            case "json":
                result.data.data = JSON.parse(codes[1].split("=")[1]);
                break;
            default:
                codes.slice(1).map((code) => {
                    const [key, data] = code.split("=");
                    result.data[key] = data;
                });
                break;
        }

        results.push(result);
    }
    return results;
};

export default parseMsg;
