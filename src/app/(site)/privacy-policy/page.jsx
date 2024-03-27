import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="mb-5  min-h-screen w-full grid-cols-2 gap-x-5 gap-y-[110px] px-[10px] pt-[10px] text-xs md:gap-y-[180px] lg:grid lg:px-5">
      <div className="absolute mt-[10px]">Privacy Policy</div>

      <div className="mt-[50px] flex flex-col md:mb-[100px] lg:col-start-2">
        <div className="mb-5">
          <p className="font-medium">Privacy Policy - General</p>
          <p>
            At Benchmark Homes we respect your privacy and the confidentiality
            of your personal data, this document outlines how we handle and use
            your data.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">Where do we collect your personal data</p>
          <p>
            We collect your data through our website,{' '}
            <a href="/">benchmarkhomes.co.nz</a>
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">Why do we collect your personal data?</p>
          <p>
            Your personal data is collected through the website for marketing
            purposes. Your personal data is collected when filling out a form to
            contact us through our website. Which is entirely voluntary and with
            explicit authorisation, allowing Benchmark Homes to contact you.
            Data is also tracked to inform site performance and user experience.
            We may hold and process personal data that you provide us for 3
            years, in accordance with the GDPR.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">What personal data do we collect?</p>
          <p>
            Benchmark Homes collect the following personal data: First name and
            surname, email address and phone number, with the message you supply
            us. Additionally, data is collected indirectly by our website
            through cookies, geo referencing data, widgets, etc. Cookies are
            used to measure the number of visitors to our website, record how
            users interact with our website, and identify user devices. Cookies
            will also be used for marketing purposes, helping us serve relevant
            ads to you.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">How do we treat personal data?</p>
          <p>
            All personal data is collected directly by Benchmark Homes with the
            purpose of sending information to users by email, as outlined in the
            terms and conditions above. All data is treated confidentially and
            is stored in a database with access restricted to Benchmark Homes
            staff that need to use it for the purposes outlined above.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">
            What security measures are in place to protect personal data?
          </p>
          <p>
            At Benchmark Homes we respect your privacy and the confidentiality
            of your personal data, this document outlines how we handle and use
            your data.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">
            What happens if there is a violation of our security systems?
          </p>
          <p>
            If a violation in our security system occurs which results in
            non-permitted access to your data by third parties we will contact
            you by email.
          </p>
        </div>
        <div className="mb-5">
          <p className="font-medium">
            How can I request to update or remove my personal data?
          </p>
          <p>
            If you want to update or remove your personal data just send us a
            message via our form. Or you can send us an email to
            info@benchmarkhomes.co.nz
          </p>
        </div>
        <div className="mb-5">
          <p className="font-medium">
            Will your data be shared with a third party(s)?
          </p>
          <p>
            Your data can be shared with third parties, namely infrastructure
            suppliers (server, web hosting service and email) or other suppliers
            that may use the data to perform operational tasks such as email
            marketing software. We do not share email addresses or personal
            information, unless you have requested us to.
          </p>
        </div>
        <div className="mb-5">
          <p className="font-medium">
            What happens with personal data transmitted for the purpose of
            requesting contact?
          </p>
          <p>
            This personal data will be used exclusively for its intended purpose
            – to contact.
          </p>
        </div>
        <div className="mb-5">
          <p className="font-medium">Can this privacy policy change?</p>
          <p>
            Yes, depending on legislation and technology updates it is possible
            that our privacy policy will change. All the changes will be added
            to this document and will be available online though our website.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-medium">
            Do you have any questions about our privacy policy?
          </p>
          <p>
            If you have any questions about our privacy policy please send us a
            message via our form. Or you can send us an email to
            info@benchmarkhomes.co.nz
          </p>
        </div>
      </div>
    </div>
  );
}
