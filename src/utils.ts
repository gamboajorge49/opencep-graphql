export function validarcep(cep:string)  {
    var cepRegex = /^[0-9]{5}[0-9]{3}/
    return ((cep.length == 8) && cepRegex.test(cep))
}