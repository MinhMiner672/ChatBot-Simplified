const friends = [
	{
		age: 10,
		name: "Castillo",
	},
	{
		age: 11,
		name: "Daugherty",
	},
	{
		age: 12,
		name: "Travis",
	},
]

friends.forEach((friend, index) => (friend.id = index + 1))

console.log(friends)
