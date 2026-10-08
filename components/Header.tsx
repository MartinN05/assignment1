type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p>Assignment 1 Martin</p>
    </header>
  );
}