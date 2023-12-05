export const loginRules = {
    email: [
        {
            required: true,
            message: "لطفا ایمیل خود را وارد کنید"
        },
        {
            type: "email",
            message: "فرمت ورودی اشتباه است"
        }
    ],
    password: [
        {
            required: true,
            message: "لطفا رمز عبور خود را وارد کنید"
        }
    ]
}
