const About: React.FC = () => {
  return (
    <div className="relative w-full min-h-[80rem] bg-transparent flex items-center justify-center">
      {/* Centered Content */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to your one-stop shop! We are committed to providing the best services.
        </p>
      </div>
    </div>
  );
};

export default About;
