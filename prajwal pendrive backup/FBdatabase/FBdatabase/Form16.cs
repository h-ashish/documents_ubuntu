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
    public partial class Form16 : Form
    {
        public Form16()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form15 a = new Form15();
            a.Show();
            this.Hide();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            String a= textBox1.Text;
            String b = textBox2.Text;
           // String c = textBox3.Text;
            //int d = int.Parse(textBox4.Text);

            string query = "insert into facebook.blocked_accounts values ('" + a + "','" + b + "')";



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

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
