enum Status {
    Uploading,
    Success,
    Failed
}

// 字符串枚举

enum Message {
    Error= 'Sorry, error',
    Success = "Hoho, success"
}

enum Result {
    Success,
    Fail
}


let m: number | string | undefined | null
m = 3




enum Status2 {
    Off,
    ON
}

interface Light {
    status: Status2
}