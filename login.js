import React, { Component } from 'react';
import { Text, 
	StyleSheet, 
	View, 
	Image, 
	TextInput,
	TouchableHighlight } from 'react-native';

class Login extends Component {
	render() {
		return (
			<View style={style.container}>

			<Image
		    style={style.logo}
		  />
		  <Text style={style.welcomeText}>Kipa</Text>
		  <TextInput style={style.inputs} placeholder='Username'/>
		  <TextInput 
			  style={style.inputs} 
			  placeholder='Password' 
			  secureTextEntry={true}/>
			<TouchableHighlight style={style.loginButton}>
				<Text style={style.loginText}>Login</Text>
			</TouchableHighlight>

			</View>
		);
	}
}

var style = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#203D73',
		paddingTop: 20
	},
	welcomeText: {
		color: '#FFFFFF',
		fontSize: 20
	},
	logo: {
		height: 30,
		width: 30
	},
	inputs: {
		height: 50,
		marginTop: 10,
		padding: 10,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#ffffff',
		color: '#ffffff'
	},
	loginButton: {
		backgroundColor: '#187955',
		height: 40,
		marginTop: 15,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3

	},
	loginText: {
		color: '#ffffff',
		fontSize: 15

	}
});

export default Login;
