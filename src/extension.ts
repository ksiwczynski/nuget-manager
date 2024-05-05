// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nuget-manager" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let add = vscode.commands.registerCommand('nuget-manager.addPackage', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('addPackage!');
	});

	context.subscriptions.push(add);

	let update = vscode.commands.registerCommand('nuget-manager.updatePackage', () => {
		vscode.window.showInformationMessage('updatePackage!');
	});

	context.subscriptions.push(update);

	let updateAll = vscode.commands.registerCommand('nuget-manager.updateAllPackages', () => {
		let yesNo = ["Yes", "No"];
		vscode.window.showWarningMessage("Czy na pewno?", ...yesNo);
	});

	context.subscriptions.push(updateAll);

	let remove = vscode.commands.registerCommand('nuget-manager.removePackage', () => {
		vscode.window.showInformationMessage('removePackage!');
	});

	context.subscriptions.push(remove);
}

// This method is called when your extension is deactivated
export function deactivate() { }
