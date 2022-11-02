import { LoginDialog } from './LoginDialog';

const style = {
  component: {
    background: '#5a2d90',
    height: '100vh',
  },
};

export function Six() {
  return (
    <div style={style.component}>
      <LoginDialog />
    </div>
  );
}
