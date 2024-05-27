const phoneNumberDirectory = require(("./phone_number_directory"))

const result = phoneNumberDirectory([
    'john:123-456-7890',
    'jane:456-678-0123',
    'jim:333-321-9876',
])
console.log(result);