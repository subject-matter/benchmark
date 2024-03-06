import Image from 'next/image';
import React from 'react';
import Benchmark from '../../(site)/assets/images/Benchmark.svg';

function Logo() {
  return (
    <div>
      <Image src={Benchmark} alt="Benchmark Homes" width={150} height={100} />
    </div>
  );
}

export default Logo;
