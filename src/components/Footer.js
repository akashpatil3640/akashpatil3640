import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  
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
      bg={'#24282b'}
      color={'#d6dde2'}
      _focusVisible={{ boxShadow: '0 0 0 2px #f08080', outline: 'none' }}
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
        bg: '#58262d',
        color: '#ffffff',
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
      bg={'#111516'}
      borderTop={'1px solid #353033'}
      color={'#d6dde2'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={'#d6dde2'} />
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
                bg={'#24282b'}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={'#f08080'}
                color={'#111516'}
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