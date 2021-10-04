using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using MySql.Data.MySqlClient;



namespace FBdatabase
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form3 a = new Form3();
            a.Show();
            this.Hide();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form3 a = new Form3();
            a.Show();
            this.Hide();
           

        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            String a = textBox1.Text;
            String b = textBox2.Text;
            String c = textBox3.Text;
            String d = textBox4.Text;
            String f = textBox5.Text;
            String g = textBox6.Text;

            string query = "insert into facebook.users values ('" + a + "','" + b + "','"+c+"','"+d+"','"+f+"','"+g+"')";



            MySqlConnection sqlp = new MySqlConnection("server=localhost;User Id=root; password=root;database=facebook");

            try
            {
                sqlp.Open();
                MySqlCommand cmd = new MySqlCommand(query, sqlp);
                cmd.ExecuteNonQuery();
                sqlp.Close();
                MessageBox.Show("added post sucessfully");

            }
            catch (Exception ex)
            {
                MessageBox.Show("error" + ex.Message);
            }




        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void Form2_Load(object sender, EventArgs e)
        {

        }

        private void textBox6_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

       
    }
}
