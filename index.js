const refs = {
    formRef: document.querySelector("#change-password-form"),
    formFieldsRef: document.querySelectorAll(".change-password-form__field"),
    fieldEmailRef: document.querySelector(".js-field-email"),
    fieldControlStringRef: document.querySelector(".js-field-control-string"),
    fieldPasswordRef: document.querySelector(".js-field-password"),
    fieldConfirmPasswordRef: document.querySelector(".js-field-confirm-password"),
    passwordErrorRef: document.querySelector(".js-password-error"),
    controlStringErrorRef: document.querySelector(".js-control-string-error"),
    confirmPasswordErrorRef: document.querySelector(".js-confirm-password-error"),
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

function validateControlString (controlString) {
    const re = /^[a-zA-Z]+$/;
    return re.test(controlString);
};

refs.formRef.addEventListener("submit", (e) => {
    e.preventDefault();

   refs.formFieldsRef.forEach(input => {
        if (input.value === "") {
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    if (refs.fieldPasswordRef.value.length < 6) {
        refs.passwordErrorRef.classList.add("error-massege--active");
    } else {
        refs.passwordErrorRef.classList.remove("error-massege--active");
    };

    if (!validateControlString(refs.fieldControlStringRef.value)) {
        refs.controlStringErrorRef.classList.add("error-massege--active");
        refs.fieldControlStringRef.classList.add("error");
    } else {
        refs.controlStringErrorRef.classList.remove("error-massege--active");
        refs.fieldControlStringRef.classList.remove("error");
    };

    if (refs.fieldPasswordRef.value !== refs.fieldConfirmPasswordRef.value) {
        refs.confirmPasswordErrorRef.classList.add("error-massege--active");
        refs.fieldConfirmPasswordRef.classList.add("error");
    } else {
        refs.confirmPasswordErrorRef.classList.remove("error-massege--active");
        refs.fieldConfirmPasswordRef.classList.remove("error");
    };
});