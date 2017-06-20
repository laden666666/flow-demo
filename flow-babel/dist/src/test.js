function foo(x) {
    return x * 12; //Flow根据代码，推断foo的x1参数是string类型，string类型不能执行“*”操作，所有这里Flow会报错
}

foo("Hello, world!");

let a = '';