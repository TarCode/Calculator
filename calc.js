var calc = {
	el1: 0,
	el2 : 0,
	num : 0,
	sum: 0,
	op: '',

	append : function(id){

		switch(id){
			case 'num1':
				document.getElementById('displ').innerHTML += '1';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num2':
				document.getElementById('displ').innerHTML += '2';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num3':
				document.getElementById('displ').innerHTML += '3';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num4':
				document.getElementById('displ').innerHTML += '4';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num5':
				document.getElementById('displ').innerHTML += '5';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num6':
				document.getElementById('displ').innerHTML += '6';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num7':
				document.getElementById('displ').innerHTML += '7';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num8':
				document.getElementById('displ').innerHTML += '8';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num9':
				document.getElementById('displ').innerHTML += '9';
				this.num += document.getElementById(id).innerHTML;
			break;

			case 'num0':
				document.getElementById('displ').innerHTML += '0';
				this.num += document.getElementById(id).innerHTML;
			break;

		}

	},

	add : function (){

		this.op = '+';
		document.getElementById('displ').innerHTML += ' + ';
		this.el1 = this.num;
		this.num = 0;
	},
	
	subtract: function (){
		this.op = '-';
		document.getElementById('displ').innerHTML += ' - ';
		this.el1 += this.num;
		this.num = 0;
	},

	 multiply: function (){
		this.op = 'x';
		document.getElementById('displ').innerHTML += ' x ';
		this.el1 += this.num;
		this.num = 0;
	},

	divide: function (){
		this.op = '/';
		document.getElementById('displ').innerHTML += ' / ';
		this.el1 += this.num;
		this.num = 0;
	},

	equals: function (){
		

		if(this.op === '+'){
			this.el2 = this.num;
			this.num = 0;
			var n1 = parseFloat(this.el1);
			var n2 =parseFloat(this.el2);

			this.sum = n1 + n2;
			
			this.el1 = 0;
			this.el2 = 0;

			
			document.getElementById('displ').innerHTML = this.sum;
		}
		else if(this.op === '-'){
			this.el2 = this.num;
			this.num = 0;
			var n1 = parseFloat(this.el1);
			var n2 =parseFloat(this.el2);

			this.sum = n1 - n2;
			
			this.el1 = 0;
			this.el2 = 0;
			document.getElementById('displ').innerHTML = this.sum;
		}
		else if(this.op === 'x'){
			this.el2 = this.num;
			this.num = 0;
			var n1 = parseFloat(this.el1);
			var n2 =parseFloat(this.el2);

			this.sum = n1 * n2;
			
			this.el1 = 0;
			this.el2 = 0;
			document.getElementById('displ').innerHTML = this.sum;		}
		else if(this.op === '/'){
			this.el2 = this.num;
			this.num = 0;
			var n1 = parseFloat(this.el1);
			var n2 =parseFloat(this.el2);

			this.sum = n1 / n2;
			
			this.el1 = 0;
			this.el2 = 0;
			document.getElementById('displ').innerHTML = this.sum;
		}
	},

	clear : function(){

		this.num = 0;
		this.el1 = 0;
		this.el2 = 0;
		document.getElementById('displ').innerHTML = '';

	}

}

	