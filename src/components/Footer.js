import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  
  useColorModeValue,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaGithub ,FaWhatsapp,FaLinkedin} from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import dp from './Naruto/dp.jpg'

const Logo = (props: any) => {

  
  return (
    <Grid
      templateRows='repeat(1,1fr)'
      templateColumns='repeat(5,1fr)'
      >

      <GridItem rowSpan={1} colSpan={1} >
        <Image
          borderRadius='full'
          boxSize='50px'
          src={dp}
          alt='Akash Patil'
        /> 
      </GridItem>

      <GridItem rowSpan={1} colSpan={3} my={4}>
        <Text as='b'>_ak_sh_002</Text>
      </GridItem>

    </Grid>
    
  
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const d = new Date();
  let year = d.getFullYear();
  
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © {year} Akash Patil. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/akashpatil3640'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Github'} href={'https://github.com/akashpatil3640/'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/_ak_sh_002/'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Gmail'} href={'mailto:akashpatil3640@gmail.com'}>
              <FiMail />
              </SocialButton>
              <SocialButton label={'Whatsapp'} href={'https://wa.me/8530914412'}>
                <FaWhatsapp />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/akashpatil3640/'}>
                <FaLinkedin />
                
              </SocialButton>
            </Stack>
          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack> */}
          {/* <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack> */}
          {/* <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}