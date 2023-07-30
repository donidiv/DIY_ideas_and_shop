import { ValidatorFn } from "@angular/forms";


export function appEmailValidator(domains: string[]):  ValidatorFn{

    const domainStrings = domains.join('|');
    const regEx = new RegExp (`[^@]{2,}@gmail\.(${domainStrings})$`)

    return (control) => {
        return control.value === "" || regEx.test(control.value) ? null : {appEmailValidator: true};
    };
}