let man ={
    name :'chandra',
    age:23,
    gender:'male'
}
function invite(i1,i2){
    console.log(
        i1+" "+this.name+" "+i2
    )
}
invite.call(man,'hello','how are you')
invite.apply(man, ['hello','how are you'])
const bindexp = invite.bind(man);
bindexp('hi','how are you')