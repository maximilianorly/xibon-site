import NavigationTab from "./components/NavigationTab";

export default function Home() {
  console.log('home')
  return (
    <>
      <div className='text-orange'>My page</div>
      <NavigationTab isActive={true} label='work' />
    </>
  );
}
