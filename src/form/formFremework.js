export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export const validate = (value, validation) => {
    if (!validation) {
        return true
    }

    let isValid = true;
    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }

    return isValid;
}

export const validateForm = formControls => {
    let isFormValid = true;

    Object.keys(formControls).forEach(controlName => {
        isFormValid = formControls[controlName].valid && isFormValid
    })
    
    return isFormValid;
}