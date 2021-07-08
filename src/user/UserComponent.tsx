import React, { FC, useState, useCallback } from 'react';

interface Props {
	name: string;
	password: string;
	login(name: string, password: string): void;
	logout(): void;
}
const UserComponent: FC<Props> = function (props) {
	const { name, password, login, logout } = props;
	const [newName, setNewName] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const loginRequest = useCallback(() => {
		login(newName, newPassword);
	}, [newName, newPassword]);

	return (
		<div>
			<span>姓名：{name}</span>
			<span>密码：{password}</span>
			<div>
				<input
					onInput={e => setNewName(e.currentTarget.value)}
					value={newName}
					placeholder='正确名字：胡志武'
				></input>
				<input
					onInput={e => setNewPassword(e.currentTarget.value)}
					value={newPassword}
					placeholder='正确密码：123456'
				></input>
				<button onClick={loginRequest}>登录</button>
				<button onClick={logout}>退出</button>
			</div>
		</div>
	);
};

export default UserComponent;
