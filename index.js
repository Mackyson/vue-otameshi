var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello',
		count: 0,
		list:[
			{id: 1},
			{id: 2},
		]
	},
	methods:{
		countup: function(){
			this.count++
		}
	}
})
