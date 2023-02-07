const refs = {
    formRef: document.querySelector("#change-password-form"),
    formFieldsRef: document.querySelectorAll(".change-password-form__field"),
    fieldEmailRef: document.querySelector(".js-field-email"),
    fieldControlStringRef: document.querySelector(".js-field-control-string"),
    fieldPasswordRef: document.querySelector(".js-field-password"),
    fieldConfirmPasswordRef: document.querySelector(".js-field-confirm-password"),
    showPasswordRef: document.querySelector(".show-password")
};

refs.showPasswordRef.addEventListener("click", () => {
    if (refs.fieldPasswordRef.type === "password") {
        refs.fieldPasswordRef.type = "text";
        return;
    } else {
        refs.fieldPasswordRef.type = "password";
        return;
    }
});

function validateControlString(controlString) {
    const re = /^[a-zA-Z]+$/;
    return re.test(controlString);
};

function setError(input, value, massege) { 
    input.classList.add("error");
    const errorRef = input.parentElement.querySelector(".error-massege");
    errorRef.textContent = value ? massege : "Заполните поле";
}; 

function setSuccess(input) { 
    input.classList.remove("error");
    const errorRef = input.parentElement.querySelector(".error-massege");
    errorRef.textContent = "";
}; 

refs.formRef.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = refs.fieldEmailRef.value.trim();
    const password = refs.fieldPasswordRef.value.trim();
    const confirmedPassword = refs.fieldConfirmPasswordRef.value.trim();
    const controlString = refs.fieldControlStringRef.value.trim();

    if (!email) {
        setError(refs.fieldEmailRef, email, "Пароль должен быть не менее 6 символов");
    } else {
        setSuccess(refs.fieldEmailRef);
    };

    if (password.length < 6) {
        setError(refs.fieldPasswordRef, password, "Пароль должен быть не менее 6 символов");
    } else {
        setSuccess(refs.fieldPasswordRef);
    };

    if (!validateControlString(controlString)) {
        setError(refs.fieldControlStringRef, controlString, "Неверное контрольное слово");
    } else {
        setSuccess(refs.fieldControlStringRef);
    };
  
    if (!confirmedPassword || password !== confirmedPassword) {
        setError(refs.fieldConfirmPasswordRef, confirmedPassword, "Пароли не совпадают");
    } else {
        setSuccess(refs.fieldConfirmPasswordRef);
    };
});