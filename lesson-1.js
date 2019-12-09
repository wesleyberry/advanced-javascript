var myobj = {
    name: 'Jade',
    hello: function() {
        console.log(this.name);
    }
};

myobj.hello();