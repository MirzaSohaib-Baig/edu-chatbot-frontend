'use client';
// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { AIGeniusLogo } from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      <AIGeniusLogo h="26px" w="146px" my="30px" color={logoColor} />
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
