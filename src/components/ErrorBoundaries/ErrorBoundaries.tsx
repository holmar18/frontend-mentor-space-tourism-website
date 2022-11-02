import React, { ReactNode, Component, ErrorInfo } from 'react';

interface IProps {
	children?: ReactNode;
}

interface IState {
	hasError: boolean;
}

class ErrorBoundaries extends Component<IProps, IState> {
	public state: IState = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): IState {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return <h1>Sorry.. there was an error</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundaries;
