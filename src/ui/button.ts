export interface button {
	type?: 'submit' | 'reset' | 'button' | undefined;
	click?: () => void;
	children?: React.ReactNode;
}
