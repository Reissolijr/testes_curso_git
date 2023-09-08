import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import InputField from '../components/InputField';

const NovoClienteScreen = () => {
    const [nome, setNome] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [contatoResponsavel, setContatoResponsavel] = useState('');
    const [telefoneResponsavel, setTelefoneResponsavel] = useState('');

    const handleSalvar = () => {
        // Aqui você pode chamar uma função para inserir os dados no banco de dados
        // Por enquanto, apenas exibiremos os dados no console
        console.log({
            nome,
            razaoSocial,
            cnpj,
            telefone,
            rua,
            numero,
            cidade,
            contatoResponsavel,
            telefoneResponsavel,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Novo Cliente</Text>
            <InputField placeholder="Nome" value={nome} onChangeText={setNome} />
            <InputField placeholder="Razão Social" value={razaoSocial} onChangeText={setRazaoSocial} />
            <InputField placeholder="CNPJ" value={cnpj} onChangeText={setCnpj} keyboardType="numeric"/>
            <InputField placeholder="Telefone Cliente" value={telefone} onChangeText={setTelefone} keyboardType="numeric" />
            <InputField placeholder="Rua" value={rua} onChangeText={setRua}/>
            <InputField placeholder="Numero" value={numero} onChangeText={setNumero} keyboardType="numeric" />
            <InputField placeholder="Cidade" value={cidade} onChangeText={setCidade} />
            <InputField placeholder="Contato do Responsavel" value={contatoResponsavel} onChangeText={setContatoResponsavel} />
            <InputField placeholder="Telefone do Responsável" value={telefoneResponsavel} onChangeText={setTelefoneResponsavel} keyboardType="numeric" />
            {/* Outros campos de input */}
            <Button title="Salvar" onPress={handleSalvar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default NovoClienteScreen;
