Vue.createApp({
	// data() {
	// 	return {

	// 	}
	// }
	data: () => ({
		myHTML: '<h1>Vue 3 app</h1>',
		title: 'I am Grut',
		persone: {
			name: 'Dima',
			lastName: 'Lubenchenko',
			age: 33,
		},
		items: [1, 2],
	}),
	methods: {
		// stopPropagation(e) {
		// 	e.stopPropagation()
		// },
		addItem() {
			this.items.unshift(this.$refs.myInput.value)
			this.$refs.myInput.value = ''
			// console.log(event.key)
			// console.log(this.$refs.myInput.value)
		},
		remove(i) {
			this.items.splice(i, 1)
		},
		log(item) {
			console.log(item)
		},
	},
	computed: {
		evenItems() {
			return this.items.filter((i) => i % 2 === 0)
		},
	},
}).mount('#app')
