import React from 'react';

const Footer = () => {
    return (
       <div className="border-t border-gray-200 mt-4">
    <div className="container mx-auto flex flex-col gap-1 px-3 py-3 sm:p-4 md:flex-row md:items-center md:justify-between md:gap-4">
        <p className="text-xs sm:text-sm lg:text-base text-gray-600">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-xs sm:text-sm lg:text-base text-gray-600">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
    </div>
</div>
    );
};

export default Footer;