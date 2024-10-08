import { useColorModeValue } from '@chakra-ui/react'
import Card from '@/components/card/Card'
import KatexSpan from './equationFormat/KatexSpan'

export default function MessageBox(props: { output: string }) {
  const { output } = props
  const textColor = useColorModeValue('navy.700', 'white')
  return (
    <Card
      display={output ? 'flex' : 'none'}
      px="22px !important"
      pl="22px !important"
      color={textColor}
      // minH="450px"
      fontSize={{ base: 'sm', md: 'md' }}
      lineHeight={{ base: '24px', md: '26px' }}
      fontWeight="500"
    >
      {/* <span className="text-[18px]" dangerouslySetInnerHTML={{ __html: output ? output : '' }}>
        
      </span> */}
      <KatexSpan text={output} delegated={{ className: 'text-[18px]' }}/>
    </Card>
  )
}
