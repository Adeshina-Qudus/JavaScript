function questions(role){
    switch (role){
        case 'Manager':
            return function(){
                return `Hi ${role}, what is the core value  of the company?`;
            };
        case 'native':
            return function(name){
                return `Hi ${name}, What is your best programming language?`;
            };
        case 'elder':
            return function(){
                return `Hi ${role}, do you love your job?`;
            };
        default:
            return;    
    }
}
let answer = questions('native');
console.log(answer);