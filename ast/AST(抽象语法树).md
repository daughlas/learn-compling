# AST(抽象语法树)

```
function add(a, b) {
	return a + b
}
```



转换成 tokens 

```
body: [
	{
		type: "FunctionDeclaration",
		id: {
			type: "Identifier",
			name: "add"
			...
		},
		params: [
			{
				type: "Identifier",
				name: "a"
				...
			},
			{
				type: "Identifier",
				name: "b"
				...
			},
		],
		body: [
			{
				type: 'BlockStatement',
        body: [
					{
						type: 'ReturnStatement',
						argument: {
							type: 'BinaryExpression',
							operator: '+',
							left: {
								type: "Identifier",
                name: "a"
                ...
							},
							right: {
								type: "Identifier",
                name: "b"
                ...
							},
						}
					}
        ]
			}
		]
	}
]
```

