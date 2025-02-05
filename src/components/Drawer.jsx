import { motion } from 'framer-motion';

function Drawer({ onClose }) {
  return (
    <>
      {/* Overlay that closes the drawer when clicked */}
      <div
        className="fixed inset-0 z-40 bg-black opacity-50"
        onClick={onClose} // Trigger onClose when clicking outside the drawer
      ></div>

      <motion.div
        className="absolute top-0 left-0 z-50 px-4 py-4 bg-white drawer w-[300px]"
        style={{ height: 'calc(100vh - 48px)' }}
        initial={{ x: '-100%' }} // Start off-screen (to the left)
        animate={{ x: 0 }} // Move to 0 when open
        exit={{ x: '-100%' }} // Exit back to the left when closing
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <h1 className="text-2xl font-bold cursor-pointer">
          Exclusive
        </h1>
        <ul className='flex flex-col gap-4 py-3 mt-5 font-semibold'>
          <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>Home</a></li>
          <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>Contact</a></li>
          <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>About</a></li>
          <li><a href="#" className='transition-all duration-700 hover:underline decoration-2'>Sign Up</a></li>
        </ul>
      </motion.div>
    </>
  );
}

export default Drawer;
