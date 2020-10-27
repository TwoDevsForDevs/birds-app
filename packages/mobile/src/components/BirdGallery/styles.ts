import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { BirdRegister } from '.';

export const Container = styled(FlatList as new () => FlatList<BirdRegister>)``;
