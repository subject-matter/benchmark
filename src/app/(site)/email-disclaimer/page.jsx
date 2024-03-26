import React from 'react';

export default function EmailDisclaimer() {
  return (
    <div className="mb-5 grid h-screen w-full grid-cols-2 gap-x-5 gap-y-[110px] px-[10px] pt-[10px] text-xs md:gap-y-[180px] lg:px-5">
      <div className="absolute mt-[10px]">Email Disclaimer</div>

      <div className="col-span-2 flex h-full items-center justify-center  md:mb-[100px] lg:col-span-1  lg:col-start-2">
        <p>
          This email and any files transmitted with it are confidential and
          intended solely for the use of the individual or entity to whom they
          are addressed. If you have received this email in error please notify
          Benchmark Homes. This message contains confidential information and is
          intended only for the individual named. If you are not the named
          addressee you should not disseminate, distribute or copy this e-mail.
          Please notify Benchmark Homes immediately by e-mail if you have
          received this e-mail by mistake and delete this e-mail from your
          system. If you are not the intended recipient you are notified that
          disclosing, copying, distributing or taking any action in reliance on
          the contents of this information is strictly prohibited.
        </p>
      </div>
    </div>
  );
}
