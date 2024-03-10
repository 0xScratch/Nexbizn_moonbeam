import React from "react";
import Register from "@/components/Register"; // Assuming Register is a component
import NFTcard from "@/components/NFTcard"; // Assuming NFTcard is a component
import { Box } from "@chakra-ui/react"; // Import Box for layout

const Home = () => {
  return (
    <main>
      <Box display="flex">
        <Box flex="0.35" p={4} marginLeft={95} marginTop={65}>  {/* 60% width for Register */}
          <Register />
        </Box>
        <Box flex="0.4" p={4}>  {/* 40% width for NFTcard */}
          <NFTcard />
        </Box>
      </Box>
    </main>
  );
};

export default Home;
