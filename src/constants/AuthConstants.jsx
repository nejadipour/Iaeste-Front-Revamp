import Cookies from "js-cookie";

export const registerRules = [
    "دانشجویان دانشگاه‌های همکار به دلیل عقد تفاهم‌نامه بر اساس میزان عملکرد دانشگاه، از امتیاز ویژه‌ای که هر ساله اعلام خواهد شد، بهره‌مند خواهند شد.",
    "انتخاب نهایی دانشجویان برای دریافت آفر کارآموزی بر اساس جمع نمرات آزمون زبان، مصاحبه با کمیته آیسته، امتیاز دانشگاه همکار و امتیاز همکاری داوطلبانه با کمیته آیسته ایران خواهد بود. نسبت این امتیازها هر ساله توسط کمیته اعلام می‌شود.",
    "پس از پذیرفته شدن از سوی آیسته ایران و گرفتن آفر، هرگونه ارتباط مستقیم با آیسته کشور مقصد و کارفرمای مربوطه پیش از پذیرفته شدن نهایی توسط کارفرما، خلاف قوانین بوده و منجر به حذف دانشجو از پروسه کارآموزی خارج از کشور خواهد شد. ارتباطات تنها از طریق آیسته ایران با سایر کشورها خواهد بود.",
    "هر دانشجو به‌طور همزمان فقط برای یک آفر می‌تواند اقدام کند و امکان اپلای برای بیش از یک آفر امکان‌پذیر نیست.",
    "گرفتن آفر کارآموزی خارج از کشور تنها منوط به شرکت در پروسه انتخاب افراد برای کارآموزی می‌باشد.",
    "هر ساله رشته‌هایی که آفر کارآموزی برای آنها وجود دارد، قبل از برگزاری آزمون زبان اعلام می‌شود. ثبت‌ نام در آزمون زبان پیش از اعلام رشته‌ها و یا عدم توجه دانشجو به رشته‌های اعلامی، تنها متوجه خود دانشجو خواهد بود و کمیته آیسته مسئولیتی در این قبال ندارد.",
    "فرصت‌های کارآموزی آیسته تنها برای دانشجویان مشغول به تحصیل می باشد و گرفتن آفر کارآموزی خارج از کشور منوط به داشتن گواهی اشتغال به تحصیل معتبر می‌باشد.",
    "تعداد افرادی که پس از آزمون زبان به مصاحبه دعوت می‌شوند، بستگی به تعداد آفر موجود در آن رشته دارد. هر ساله سه برابر تعداد آفر موجود در هر رشته افراد آن رشته به مصاحبه دعوت می‌شوند. این افراد نفرات برتر آزمون زبان می‌باشند؛ امتیاز دانشگاه در این مرحله برای دعوت به مصاحبه لحاظ نمی‌شود و تنها افراد بر اساس نمره زبان به مصاحبه دعوت می‌شوند.",
    "آفرهای کارآموزی بر اساس اولویت بندی آفرها توسط افراد دعوت شده به مصاحبه، به افراد تعلق می‌گیرد.",
]


export const getBaseURL = () => {
    const localStorageBaseURL = localStorage.getItem("baseURL");
    const baseURL = import.meta.env.VITE_BASE_URL || window.env.VITE_BASE_URL;

    return localStorageBaseURL ? localStorageBaseURL : baseURL;
}

export const getAccessToken = () => {
    return Cookies.get("access") ? `token ${Cookies.get("access")}` : null
}
