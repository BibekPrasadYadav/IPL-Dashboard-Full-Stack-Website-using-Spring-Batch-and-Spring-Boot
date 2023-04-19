package com.example.ipl_dash.ipl_dashboard.data;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.transaction.PlatformTransactionManager;

import com.example.ipl_dash.ipl_dashboard.model.Match;

@Configuration
public class BatchConfig {

    private final String[] FIELD_NAMES = new String[] { "match_id"
    ,"season","date", "city","venue", "team1", "team2"
    , "toss_winner", "toss_decision", "player_of_match", "winner"
    ,"winner_wickets"
    ,"winner_runs","outcome","result_type","results","gender"
    ,"event","match_number","umpire1","umpire2","reserve_umpire"
    ,"tv_umpire","match_referee","eliminator","method","date_1"
             };

    @Bean
public FlatFileItemReader<MatchInput> reader() {
  return new FlatFileItemReaderBuilder<MatchInput>()
    .name("personItemReader")
    .resource(new ClassPathResource("match_data.csv"))
    .delimited()
    .names(FIELD_NAMES)
    .fieldSetMapper(new BeanWrapperFieldSetMapper<MatchInput>() {{
      setTargetType(MatchInput.class);
    }})
    .build();
}

@Bean
public MatchDataProcessor processor() {
  return new MatchDataProcessor();
}

@Bean
public JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
  return new JdbcBatchItemWriterBuilder<Match>()
    .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
    .sql("INSERT INTO match (match_id,date,city,venue,team1,team2,toss_winner,toss_decision,player_of_match,result_type,results,umpire1,umpire2,match_referee)"
    +"VALUES (:matchId,:date,:city,:venue,:team1,:team2,:tossWinner,:tossDecision,:playerOfMatch,:resultType,:results,:umpire1,:umpire2,:matchReferee)")
    .dataSource(dataSource)
    .build();
}

@Bean
public Job importUserJob(JobRepository jobRepository,
    JobCompletionNotificationListener listener, Step step1) {
  return new JobBuilder("importUserJob", jobRepository)
    .incrementer(new RunIdIncrementer())
    .listener(listener)
    .flow(step1)
    .end()
    .build();
}

@Bean
public Step step1(JobRepository jobRepository,
    PlatformTransactionManager transactionManager, JdbcBatchItemWriter<Match> writer) {
  return new StepBuilder("step1", jobRepository)
    .<MatchInput, Match> chunk(10, transactionManager)
    .reader(reader())
    .processor(processor())
    .writer(writer)
    .build();
}
}
