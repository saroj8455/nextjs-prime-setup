import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'primereact/button';
export default function Home() {
  return (
    <main>
      {/* Todo */}
      <div className='card flex justify-content-center'>
        <Button label='Check' icon='pi pi-check' />
      </div>
    </main>
  );
}
