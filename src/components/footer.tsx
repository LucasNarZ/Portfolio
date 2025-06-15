function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-gray-100 dark:bg-gray-800 text-center">
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} Lucas Narloch. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
