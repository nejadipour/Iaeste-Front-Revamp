import {digitsFaToEn} from "@persian-tools/persian-tools";

const validateMobileNumber = (rule, value, callback) => {
    const pattern = /^989\d{9}$/;

    if (!value) {
        callback('لطفا شماره همراه خود را وارد کنید')
    }
    if (value && !pattern.test(digitsFaToEn(value))) {
        callback('شماره همراه وارد شده صحیح نمی‌باشد');
    } else {
        callback();
    }
};

export const registerRules = {
    phone: [
        {
            required: true,
            len: 12,
            validator: validateMobileNumber,
        }
    ],
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
            message: "لطفا کلمه عبور را وارد کنید",
        },
        {
            pattern: "^(?=.*[0-9])(?=.{8,})",
            message: "کلمه عبور باید حداقل ۸ کاراکتر بوده و شامل عدد باشد",
        },
    ],
    confirm_password: [
        ({getFieldValue}) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error('تکرار کلمه عبور صحیح نمی‌باشد'));
            },
        }),
        {
            required: true,
            message: "لطفا تکرار کلمه عبور را وارد کنید",
        },
    ],
    university: [
        {
            required: true,
            message: "لطفا نام دانشگاه خود را انتخاب کنید",
        }
    ],
    field: [
        {
            required: true,
            message: "لطفا رشته تحصیلی خود را انتخاب کنید",
        }
    ]
}
