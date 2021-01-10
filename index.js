const App = {
	data() {
		return {
			count: 0,
			message: "Hello",
			todos:[
				{id: 0, text:"a"},
				{id: 1, text:"b"}
			]
		}
	},
	methods :{
		countup: function(){
			this.count++
		}
	}
}
app = Vue.createApp(App)
app.component("todo-item",{
	props: ["todo"],
	template: "<li>{{todo.text}}</li>"
})

app.mount("#app")
